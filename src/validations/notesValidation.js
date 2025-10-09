import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constans/tags';
import { isValidObjectId } from 'mongoose';

export const getAllNotesSchema = {
  [Segments.BODY]: Joi.object({}),
  [Segments.PARAMS]: Joi.object({}),
  [Segments.QUERY]: Joi.object({}),
  [Segments.HEADERS]: Joi.object({}),
  [Segments.COOKIES]: Joi.object({}),
};

export const noteIdSchema = {
  [Segments.BODY]: Joi.object({}),
  [Segments.PARAMS]: Joi.object({}),
  [Segments.QUERY]: Joi.object({}),
  [Segments.HEADERS]: Joi.object({}),
  [Segments.COOKIES]: Joi.object({}),
};
export const createNoteSchema = {
  [Segments.BODY]: Joi.object({}),
  [Segments.PARAMS]: Joi.object({}),
  [Segments.QUERY]: Joi.object({}),
  [Segments.HEADERS]: Joi.object({}),
  [Segments.COOKIES]: Joi.object({}),
};
export const updateNoteSchema = {
  [Segments.BODY]: Joi.object({}),
  [Segments.PARAMS]: Joi.object({}),
  [Segments.QUERY]: Joi.object({}),
  [Segments.HEADERS]: Joi.object({}),
  [Segments.COOKIES]: Joi.object({}),
};
