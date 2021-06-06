/** @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle */
interface FileSystemHandle {
  name: string;
  kind: string;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle */
interface FileSystemFileHandle extends FileSystemHandle {
  kind: 'file';
  getFile(): File;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryHandle */
interface FileSystemDirectoryHandle extends FileSystemHandle {
  kind: 'directory';
  resolve(possibleDescendent: FileSystemHandle): Promise<string>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry */
interface FileSystemEntry {
  isFile: boolean;
  isDirectory: boolean;
  name: string;
  fullPath: string;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry */
interface FileSystemFileEntry extends FileSystemEntry {
  isFile: true;
  isDirectory: false;
  file(successCallback: (file: File) => void): void;
}

declare var FileSystemFileEntryConstructor: {
  prototype: FileSystemFileEntry;
  new(): FileSystemFileEntry;
};

/** @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry */
interface FileSystemDirectoryEntry extends FileSystemEntry {
  isFile: false;
  isDirectory: true;
  createReader(): FileSystemDirectoryReader;
}

declare var FileSystemDirectoryEntryConstructor: {
  prototype: FileSystemDirectoryEntry;
  new(): FileSystemDirectoryEntry;
};

/** @see https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader */
interface FileSystemDirectoryReader {
  readEntries(successCallback: (file: FileSystemFileEntry[]) => void): void;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem */
interface DataTransferItem {
  webkitGetAsEntry(): FileSystemFileEntry | FileSystemDirectoryEntry | null;
  getAsFileSystemHandle?: () => Promise<FileSystemFileHandle | FileSystemDirectoryHandle>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/File */
interface File {
  webkitRelativePath?: string;
}
