/***
 *     @author  Victor Chimenti, MSCS
 *     @file    ucor-course-item.js
 *              v9/organizer/ucorCourse
 *                  id:5424
 *
 *     This content type will work in conjunction with the Organizer.
 *
 *     Document will write once when the page loads
 *
 *     @version 2.6.2
 */








/***
 *      Import T4 Utilities
 */
importClass(com.terminalfour.spring.ApplicationContextProvider);
importClass(com.terminalfour.publish.utils.BrokerUtils);




/***
 *      Extract values from T4 element tags
 *      and confirm valid existing content item field
 */
function getContentValues(tag) {
    try {
        let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim();
        return {
            isError: false,
            content: _tag == '' ? null : _tag
        }
    } catch (error) {
        return {
            isError: true,
            message: error.message
        }
    }
}




/***
 *      Write the document
 */
function writeDocument(array) {

    for (let i = 0; i < array.length; i++) {

        document.write(array[i]);
    }
}








/***
 *  Main
 */
try {


    /***
     *      Dictionary of content
     * */
    let ucorDict = {

        contentItemName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
        ucorModule: getContentValues('<t4 type="content" name="UCOR Module" output="normal" modifiers="striptags,htmlentities" />'),
        courseType: getContentValues('<t4 type="content" name="UCOR Course Type" output="normal" modifiers="striptags,htmlentities" />'),
        courseName: getContentValues('<t4 type="content" name="UCOR Course Name" output="normal" modifiers="striptags,htmlentities" />'),


        college: getContentValues('<t4 type="content" name="College" output="normal" modifiers="striptags,htmlentities" />'),
        academicLevel: getContentValues('<t4 type="content" name="Section Academic Level" output="normal" modifiers="striptags,htmlentities" />'),
        primarySectionName: getContentValues('<t4 type="content" name="Primary Section Name" output="normal" modifiers="striptags,htmlentities" />'),
        subjectDescription: getContentValues('<t4 type="content" name="Subject" output="normal" modifiers="striptags,htmlentities" />'),
        icons: getContentValues('<t4 type="content" name="Icon ID" output="normal" modifiers="striptags,htmlentities" />'),
        summaryDescription: getContentValues('<t4 type="content" name="Plaintext Description" output="normal" modifiers="striptags,htmlentities" />'),
        courseDescription: getContentValues('<t4 type="content" name="Description" output="normal" modifiers="medialibrary,nav_sections,htmlentities" />'),
        fullTextLink: getContentValues('<t4 type="content" name="Article Title" output="fulltext" use-element="true" filename-element="Article Title" modifiers="striptags,htmlentities" />'),
        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    };

    
    // var courseNumber = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Number' output='normal' display_field='value' />");
    // var courseSection = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Section' output='normal' display_field='value' />");
    
    var term = '<t4 type="content" name="UCOR Term" output="normal" modifiers="striptags,htmlentities" />');
    var year =  '<t4 type="content" name="UCOR Year" output="normal" modifiers="striptags,htmlentities" />');
    var faculty =  '<t4 type="content" name="UCOR Faculty" output="normal" modifiers="striptags,htmlentities" />');
    var courseDescription =  '<t4 type="content" name="UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections,htmlentities" />');
    var comments =  '<t4 type="content" name="UCOR Comments" output="normal" modifiers="striptags,htmlentities" />');
    var groupDescription =  '<t4 type="content" name="Common UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections,htmlentities" />');
    var keyWords =  '<t4 type="content" name="UCOR Keywords" output="normal" modifiers="striptags,htmlentities" />');








    let prefix = "UCOR";

    

    /* -- Derive the Course Title -- */
    // var courseTitle = prefix + " " + courseName;
    // var courseTitle = prefix + " " + courseNumber + "-" + courseSection + " " + courseName;
    var courseTitle = "" + contentItemName + "";



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
    document.write('<div class="row col-xs-12 fullCourseDescriptionWrapper">');
    document.write('<div class="col-xs-12 courseDetails courseDescriptions"><h5>Course Description: </h5><div class="courseInfo">' + courseDescription + '</div></div></div>'); // close fullCourseDescriptionWrapper div







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






    /***
     *  define subtitle
     * 
     * */
    let subtitleString = (cejscDict.subjectDescription.content && cejscDict.college.content && cejscDict.academicLevel.content) ?
        '<p class="card-subtitle">' + subjectString + ' | ' + collegeString + ' | ' + academicLevelString + '</p>' :
        (cejscDict.subjectDescription.content && cejscDict.college.content && !cejscDict.academicLevel.content) ?
        '<p class="card-subtitle">' + subjectString + ' | ' + collegeString + '</p>' :
        (cejscDict.subjectDescription.content && !cejscDict.college.content && cejscDict.academicLevel.content) ?
        '<p class="card-subtitle">' + subjectString + ' | ' + academicLevelString + '</p>' :
        (!cejscDict.subjectDescription.content && cejscDict.college.content && cejscDict.academicLevel.content) ?
        '<p class="card-subtitle">' + collegeString + ' | ' + academicLevelString + '</p>' :
        (!cejscDict.subjectDescription.content && !cejscDict.college.content && cejscDict.academicLevel.content) ?
        '<p class="card-subtitle">' + academicLevelString + '</p>' :
        (!cejscDict.subjectDescription.content && cejscDict.college.content && !cejscDict.academicLevel.content) ?
        '<p class="card-subtitle">' + collegeString + '</p>' :
        (cejscDict.subjectDescription.content && !cejscDict.college.content && !cejscDict.academicLevel.content) ?
        '<p class="card-subtitle">' + subjectString + '</p>' :
        '<span class="card-subtitle visually-hidden hidden">No valid subtitle provided</span>';







    /***
     *  write document once
     * 
     * */
    writeDocument(
        [
            beginningHTML,
            openCardHeader,
            titleLink,
            subtitleString,
            closeCardHeader,
            openBodyWrapper,
            summaryString,
            listOfIcons,
            closeBodyWrapper,
            endingHTML
        ]
    );




    /* -- Error Checking -- */
} catch (err) {
    document.write(err.message);
}