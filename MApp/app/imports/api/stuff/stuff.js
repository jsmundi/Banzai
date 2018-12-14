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
      placeholder: 'example: CS 320',
    },
    autoValue: function(){
      return "Add"
    }
  },
  desc:{
    type: String,
    label: 'Description',
    optional: true,
    autoform:{
      group: 'Input Description',
      placeholder: 'Description',
    }
  },
});

Stuff.attachSchema(StuffSchema);