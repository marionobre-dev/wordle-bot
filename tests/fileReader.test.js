import FileReader from '../src/utils/fileReader';
import { test, expect } from 'playwright/test';

test('FileReader reads a file', () => {
    const fileReader = new FileReader('resources/valid-wordle-words.txt');
    const content = fileReader.read();
    expect(content).toBeDefined();
    expect(content).not.toBeNull();
    expect(content).toContain('polar');
});



test('FileReader returns only five letters words', () => {
    const fileReader = new FileReader('resources/valid-wordle-words.txt');
    const content = fileReader.read().split('\n');
    expect(content).toBeInstanceOf(Array);
    content.forEach((word) => {
        expect(word).toBeDefined();
        expect(word).not.toBeNull();
        expect(word.length).toBe(6);

    });
});