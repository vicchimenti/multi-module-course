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
        term: getContentValues('<t4 type="content" name="UCOR Term" output="normal" modifiers="striptags,htmlentities" />'),
        year: getContentValues('<t4 type="content" name="UCOR Year" output="normal" modifiers="striptags,htmlentities" />'),
        faculty: getContentValues('<t4 type="content" name="UCOR Faculty" output="normal" modifiers="striptags,htmlentities" />'),
        courseDescription: getContentValues('<t4 type="content" name="UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections,htmlentities" />'),
        groupDescription: getContentValues('<t4 type="content" name="Common UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections" />'),
        comments: getContentValues('<t4 type="content" name="UCOR Comments" output="normal" modifiers="striptags,htmlentities" />'),
        keywords: getContentValues('<t4 type="content" name="UCOR Keywords" output="normal" modifiers="striptags,htmlentities" />'),
        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    };

    
    // var courseNumber = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Number' output='normal' display_field='value' />");
    // var courseSection = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Section' output='normal' display_field='value' />");
    






    /*** 
     *  Set defaults
     * 
     * */
    let beginningHTML = '<div class="courseItemWrapper accordion" id="ucor' + ucorDict.contentId.content + '"><div class="accordion-group courseItem standardContent">';
    let endingHTML = '</div></div>';
    let prefix = "UCOR";
    let cardHeader = '<div class="card-title" id="heading' + ucorDict.contentId.content + '">';
    let closeCardHeader = '</div>';
    let buttonLink = '<button class="btn btn-link" type="button" id="button' + ucorDict.contentId.content + '" data-toggle="collapse" data-target="#collapse' + ucorDict.contentId.content + '" aria-expanded="false" aria-controls="collapse' + ucorDict.contentId.content + '">';
    let closeButton = '</button>';
    let titleWrapper = '<span class="courseTitleWrapper"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="courseTitle">' + ucorDict.contentItemName.content + '</span></span>';
    let collapseDiv = '<div class="collapse" id="collapse' + ucorDict.contentId.content + '">';
    let closeCollapseDiv = '</div>';
    let openCard = '<div class="card">';
    let closeCard = '</div>';
    let summaryWrapper = '<div class="col-xs-12 courseSummaryWrapper">';
    let closeSummaryWrapper = '</div>';
    let summaryHeader = '<div class="row col-xs-12 courseSummaryHeader">';
    let closeSummaryHeader = '</div>';
    let cardBody = '<div class="card-body">';
    let closeCardBody = '</div>';
    let openContainer = '<div class="container-fluid">';
    let closeContainer = '</div>';
    let detailsType = '<div class="col-xs-12 courseDetails courseTypes"><h4>Course Type: </h4><span class="courseType">' + ucorDict.courseType.content + '</span></div>';
    let detailsFaculty = '<div class="col-xs-12 col-sm-3 courseDetails instructors"><h5>Faculty: </h5><span class="faculty">' + ucorDict.faculty.content + '</span></div>';
    let detailsTerm = '<div class="col-xs-12 col-sm-3 courseDetails terms"><h5>Term: </h5><span class="term">' + ucorDict.term.content + '</span></div>';
    let detailsYear = '<div class="col-xs-12 col-sm-3 courseDetails years"><h5>Year: </h5><span class="year">' + ucorDict.year.content + '</span></div>';
    let detailsModule = '<div class="col-xs-12 col-sm-3 courseDetails ucorModules"><h5>Module: </h5><span class="ucorModule">' + ucorDict.ucorModule.content + '</span></div>';


    /* -- Derive the Course Title -- */
    // var courseTitle = prefix + " " + courseName;
    // var courseTitle = prefix + " " + courseNumber + "-" + courseSection + " " + courseName;
    // let courseTitle = "" + ucorDict.contentItemName.content + "";
    
    /* -- Write the card header -- */
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    // document.write('<div class="card">'); // closed individually in *** write closing tags *** found near bottom of file currently line 142
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, cardHeader));
    // document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonLink));
    // document.write('<span class="courseTitleWrapper"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="courseTitle">' + courseTitle + '</span></span></button>');  // close buttonLink tag here


    /* -- Write the open viewable summary header -- */
    // document.write('<div class="col-xs-12 courseSummaryWrapper">');
    // document.write('<div class="row col-xs-12 courseSummaryHeader">');
    // document.write('<div class="col-xs-12 courseDetails courseTypes"><h4>Course Type: </h4><span class="courseType">' + courseType + '</span></div>');
    // document.write('<div class="col-xs-12 col-sm-3 courseDetails instructors"><h5>Faculty: </h5><span class="faculty">' + faculty + '</span></div>');
    // document.write('<div class="col-xs-12 col-sm-3 courseDetails terms"><h5>Term: </h5><span class="term">' + term + '</span></div>');
    // document.write('<div class="col-xs-12 col-sm-3 courseDetails years"><h5>Year: </h5><span class="year">' + year + '</span></div>');
    // document.write('<div class="col-xs-12 col-sm-3 courseDetails ucorModules"><h5>Module: </h5><span class="ucorModule">' + ucorModule + '</span></div></div>');  // Closes courseSummaryHeader row div 
    // document.write('</div></div>'); // close courseSummaryWrapper, and card header divs





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



    // document.write('</div>'); // close the card
    // document.write(endingHTML);






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
            openCard,
            cardHeader,
            buttonLink,
            titleWrapper,
            closeButton,
            closeCardHeader,
            summaryWrapper,
            summaryHeader,
            detailsType,
            detailsFaculty,
            detailsTerm,
            detailsYear,
            detailsModule,
            closeSummaryHeader,
            closeSummaryWrapper,
            collapseDiv,
            cardBody,
            openContainer,


            closeContainer,
            closeCardBody,
            closeCollapseDiv,
            closeCard,
            endingHTML
        ]
    );




    /* -- Error Checking -- */
} catch (err) {
    document.write(err.message);
}