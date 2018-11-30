import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  name: {
    label: 'Course Title (or Course ID)',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Add a new course',
      placeholder: 'CS 320 or 07661',
    },
  },
});

Stuff.attachSchema(StuffSchema);
