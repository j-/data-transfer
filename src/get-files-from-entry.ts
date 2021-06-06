import flatten from 'lodash.flatten';

export const getFilesFromFileSystemFileEntry = async (entry: FileSystemFileEntry): Promise<File[]> => {
  const file = await new Promise<File>((resolve) => {
    entry.file(resolve);
  });
  return [file];
};

export const getFilesFromFileSystemDirectoryEntry = async (entry: FileSystemDirectoryEntry): Promise<File[]> => {
  const reader = entry.createReader();
  const entries = await new Promise<(FileSystemFileEntry | FileSystemDirectoryEntry)[]>((resolve) => {
    reader.readEntries(resolve);
  });
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const entryFiles = await Promise.all(entries.map(getFilesFromEntry));
  return flatten(entryFiles);
};

export const getFilesFromEntry = async (entry: FileSystemFileEntry | FileSystemDirectoryEntry): Promise<File[]> => {
  if (entry.isFile) {
    return getFilesFromFileSystemFileEntry(entry);
  } else if (entry.isDirectory) {
    return getFilesFromFileSystemDirectoryEntry(entry);
  } else {
    throw new Error('Expected entry to be file or directory');
  }
};
