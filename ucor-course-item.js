/***
*     @author Victor Chimenti, MSCS
*     @file ucor-course-item.js
*
*     This new content type is being adapted from the existing UCOR Categorized Course content type
*     and is intended to provide an improved searchable, sortable group of courses for the university core courses
*     that does not require complex text entry patterns in the naming convention.
*
*     This content type will work in conjunction with the Organizer and each item
*     will contain one searchable, categorizable course.
*
*     Document will write once when the page loads
*
*     @version 2.3
*/

<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />

try {
    /* -- Initialize function scope variables -- */
    
    var contentItemName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />');
    var prefix = "UCOR";
    var ucorModule = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Module" output="normal" modifiers="striptags,htmlentities" />');
    var courseType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Course Type" output="normal" modifiers="striptags,htmlentities" />');
    // var courseNumber = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Number' output='normal' display_field='value' />");
    // var courseSection = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Section' output='normal' display_field='value' />");
    var courseName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='UCOR Course Name' output='normal' display_field='value' />");
    var term = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Term" output="normal" modifiers="striptags,htmlentities" />');
    var year = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Year" output="normal" modifiers="striptags,htmlentities" />');
    var faculty = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Faculty" output="normal" modifiers="striptags,htmlentities" />');
    var courseDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections,htmlentities" />');
    var comments = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Comments" output="normal" modifiers="striptags,htmlentities" />');
    var groupDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="Common UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections,htmlentities" />');
    var keyWords = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="UCOR Keywords" output="normal" modifiers="striptags,htmlentities" />');


    /* -- Derive the Course Title -- */
    var courseTitle = prefix + " " + courseName;


    /* -- Wrap the content fields -- */
    var beginningHTML = '<div class="contentItem accordion courseItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><div class="accordion-group courseItem standardContent"><t4 type=\'meta\' meta=\'html_anchor\' />';
    var endingHTML = '</div></div>';


    /*  -- Parse out Runtime Generated Content IDs -- */
    var cardHeader = '<div class="card-header" id="heading<t4 type=\'meta\' meta=\'content_id\' />">';
    var buttonLink = '<button class="btn btn-link" type="button" id="button<t4 type=\'meta\' meta=\'content_id\' />" data-toggle="collapse" data-target="#collapse<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" aria-controls="collapse<t4 type=\'meta\' meta=\'content_id\' />">';
    var collapseDiv = '<div class="collapse" id="collapse<t4 type=\'meta\' meta=\'content_id\' />">';




    /* -- Write the card header -- */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write('<div class="card">'); // closed individually in *** write closing tags *** found near bottom of file currently line 142
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, cardHeader));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonLink));
    document.write('<span class="courseTitleWrapper"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="courseTitle">' + courseTitle + '</span></span></button>');  // close buttonLink tag here


    /* -- Write the open viewable summary header -- */
    document.write('<div class="col-xs-12 courseSummaryWrapper">');
    document.write('<div class="row col-xs-12 courseSummaryHeader">');
    document.write('<div class="col-xs-12 courseDetails courseTypes"><h4>Course Type: </h4><span class="courseType">' + courseType + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-3 courseDetails instructors"><h5>Faculty: </h5><span class="faculty">' + faculty + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-3 courseDetails terms"><h5>Term: </h5><span class="term">' + term + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-3 courseDetails years"><h5>Year: </h5><span class="year">' + year + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-3 courseDetails ucorModules"><h5>Module: </h5><span class="ucorModule">' + ucorModule + '</span></div></div>');  // Closes courseSummaryHeader row div 
    document.write('</div></div>'); // close courseSummaryWrapper, and card header divs





    /**** * -- Write the collapsible body -- **** */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, collapseDiv));  // closed in *** write closing tags ***


    /* -- Write Program Cards--*/
    document.write('<div class="card-body">');
    document.write('<div class="container-fluid">');


    /* -- Write the collapsed summary header -- */
    // document.write('<div class="row col-xs-12 fullCourseDescriptionWrapper">');
    // document.write('<div class="col-xs-12 courseDetails courseDescriptions"><h5>Course Description: </h5><div class="courseInfo">' + courseDescription + '</div></div></div>'); // close fullCourseDescriptionWrapper div







    /* -- Write Program Level 4 Details --*/
    // prerequisites re-branded as Comments
    if (comments != "") {
        document.write('<div class="row col-xs-12 levelFour">');
        document.write('<div class="col-xs-12 courseDetails comments"><h5>Comments: </h5><div class="courseInfo"><p>' + comments + '</p></div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelFour courseDetails comments" style="display: none"><h5>No Comments Provided</h5></div>');
    }


    /* -- Write Program Level 5 Details --*/
    // group description re-branded as Common UCOR Course Description
    if (groupDescription != "") {
        document.write('<div class="row col-xs-12 levelFive">');
        document.write('<div class="col-xs-12 courseDetails groupDescription"><h5>Common UCOR Course Description: </h5><div class="courseInfo">' + groupDescription + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelFive courseDetails groupDescription" style="display: none"><h5>No Common UCOR Course Description Provided</h5></div>');
    }


    /* -- Write Program Level 6 Details --*/
    if (keyWords != "") {
        /* -- Keywords is a hidden field that is used to add searchable keywords when creating a program item but is not displayed on the live page -- */
        document.write('<div class="row col-xs-12 levelSix">');
        document.write('<div class="col-xs-12 courseDetails keyWords" style="display: none"><h5>Keywords</h5><div class="courseInfo">' + keyWords + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelSix courseDetails keyWords" style="display: none"><h5>No Keywords Provided</h5></div>');
    }


    /* -- Write Program Level 7 Details --*/
    if (contentItemName != "") {
        /* -- Keywords is a hidden field that is used to add searchable keywords when creating a program item but is not displayed on the live page -- */
        document.write('<div class="row col-xs-12 levelSeven">');
        document.write('<div class="col-xs-12 courseDetails contentItemName" style="display: none"><h5>Keywords</h5><div class="courseInfo">' + contentItemName + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelSeven courseDetails contentItemName" style="display: none"><h5>No Content Item Name Provided</h5></div>');
    }


    /* -- Write Closing Tags -- */
    document.write('</div></div></div>');  // close the card-body and container-fluid and collapse div
    document.write('</div>'); // close the card
    document.write(endingHTML);




    /* -- Error Checking -- */
} catch (err) {
    document.write(err.message);
}