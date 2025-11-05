
import { API_NUM_CHANNELS, API_SAMPLE_RATE } from '../constants';

export function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}


function float32To16BitPCM(float32Arr: Float32Array): Int16Array {
    const pcm16 = new Int16Array(float32Arr.length);
    for (let i = 0; i < float32Arr.length; i++) {
        const s = Math.max(-1, Math.min(1, float32Arr[i]));
        pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    return pcm16;
}

export function createWavBlob(audioBuffer: AudioBuffer): Blob {
    const pcmData = audioBuffer.getChannelData(0);
    const pcm16Data = float32To16BitPCM(pcmData);

    const wavHeader = new Uint8Array(44);
    const view = new DataView(wavHeader.buffer);

    view.setUint32(0, 0x52494646, false); // "RIFF"
    view.setUint32(4, 36 + pcm16Data.byteLength, true);
    view.setUint32(8, 0x57415645, false); // "WAVE"
    view.setUint32(12, 0x666d7420, false); // "fmt "
    view.setUint32(16, 16, true); // PCM header size
    view.setUint16(20, 1, true); // PCM format
    view.setUint16(22, API_NUM_CHANNELS, true);
    view.setUint32(24, API_SAMPLE_RATE, true);
    view.setUint32(28, API_SAMPLE_RATE * API_NUM_CHANNELS * 2, true); // Byte rate
    view.setUint16(32, API_NUM_CHANNELS * 2, true); // Block align
    view.setUint16(34, 16, true); // Bits per sample
    view.setUint32(36, 0x64617461, false); // "data"
    view.setUint32(40, pcm16Data.byteLength, true);

    return new Blob([wavHeader, pcm16Data], { type: 'audio/wav' });
}
