import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Home_Page.events({
    'click .Math171':function(event){
        Stuff.insert({
            name: "CourseName",
            desc: "This is the description",
            indexFlag: 0
        });
        let test = Stuff.findOne();
        console.log(test, test.name, test.desc, test.indexFlag);
        FlowRouter.go('Class_Info_Page');
    },
});

