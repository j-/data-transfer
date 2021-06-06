export const isEvent = (item: any): item is Event => (
  item instanceof Event
);

export const isDragEvent = (event: Event): event is DragEvent => (
  event.type === 'drag' ||
  event.type === 'dragend' ||
  event.type === 'dragenter' ||
  event.type === 'dragexit' ||
  event.type === 'dragleave' ||
  event.type === 'dragover' ||
  event.type === 'dragstart' ||
  event.type === 'drop'
);

export const isClipboardEvent = (event: Event): event is ClipboardEvent => (
  event.type === 'copy' ||
  event.type === 'cut' ||
  event.type === 'paste'
);

export const isSafeEvent = (event: Event): boolean => (
  event.type === 'drop' ||
  event.type === 'paste'
);
