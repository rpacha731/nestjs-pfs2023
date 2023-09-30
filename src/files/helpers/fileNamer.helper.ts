import { v4 as uuid } from 'uuid';

export const fileNamer = (req, file, callback) => {
  if (!file) return callback(new Error('File is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];

  const fileName = `${uuid()}.${fileExtension}`;

  callback(null, fileName);
};
