/***
 *     @author  Victor Chimenti, MSCS
 *     @file    v9-organizer-ucorCourse.js
 *              v9/organizer/ucorCourse
 *                  id:5424
 *
 *     This content type will work in conjunction with the Organizer.
 *
 *     Document will write once when the page loads
 *
 *     @version 2.7
 */








/***
 *      Import T4 Utilities
 */
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
        };
    } catch (error) {
        return {
            isError: true,
            message: error.message
        };
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
 * 
 */
try {


    /***
     *      Dictionary of content
     * */
    let ucorDict = {

        contentItemName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
        courseName: getContentValues('<t4 type="content" name="UCOR Course Name" output="normal" modifiers="striptags,htmlentities" />'),
        courseNumber: getContentValues('<t4 type="content" name="UCOR Course Number" output="normal" modifiers="striptags,htmlentities" />'),
        courseSection: getContentValues('<t4 type="content" name="UCOR Section" output="normal" modifiers="striptags,htmlentities" />'),
        courseType: getContentValues('<t4 type="content" name="UCOR Course Type" output="normal" modifiers="striptags,htmlentities" />'),
        ucorModule: getContentValues('<t4 type="content" name="UCOR Module" output="normal" modifiers="striptags,htmlentities" />'),
        year: getContentValues('<t4 type="content" name="UCOR Year" output="normal" modifiers="striptags,htmlentities" />'),
        term: getContentValues('<t4 type="content" name="UCOR Term" output="normal" modifiers="striptags,htmlentities" />'),
        faculty: getContentValues('<t4 type="content" name="UCOR Faculty" output="normal" modifiers="striptags,htmlentities" />'),
        courseDescription: getContentValues('<t4 type="content" name="UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections" />'),
        groupDescription: getContentValues('<t4 type="content" name="Common UCOR Course Description" output="normal" modifiers="medialibrary,nav_sections" />'),
        comments: getContentValues('<t4 type="content" name="UCOR Comments" output="normal" modifiers="striptags,htmlentities" />'),
        keywords: getContentValues('<t4 type="content" name="UCOR Keywords" output="normal" modifiers="striptags,htmlentities" />'),
        contentId: getContentValues('<t4 type="meta" meta="content_id" />')

    };    




    /*** 
     *  define html skeleton
     * 
     * */
    let endingHTML = '</div></article>';
    let prefix = "UCOR";
    let cardHeader = '<h3 class="card-title" id="heading' + ucorDict.contentId.content + '">';
    let closeCardHeader = '</h3>';
    let buttonLink = '<button class="btn btn-link" type="button" id="button' + ucorDict.contentId.content + '" data-toggle="collapse" data-target="#collapse' + ucorDict.contentId.content + '" aria-expanded="false" aria-controls="collapse' + ucorDict.contentId.content + '">';
    let closeButton = '</button>';
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
    let descriptionWrapper = '<div class="row col-xs-12 fullCourseDescriptionWrapper">';
    let closeDescriptionWrapper = '</div>';




    let beginningHTML = (ucorDict.courseName.content) ?
                        '<article class="courseItemWrapper accordion" id="ucor' + ucorDict.contentId.content + '" role="contentinfo" aria-label="' + ucorDict.courseName.content + '"><div class="accordion-group courseItem standardContent">' :
                        '<article class="courseItemWrapper accordion" id="ucor' + ucorDict.contentId.content + '" role="contentinfo" aria-label="' + ucorDict.contentItemName.content + '"><div class="accordion-group courseItem standardContent">';




    /*** 
     *  title asssignment
     * 
     * */
    let titleWrapper =  (ucorDict.courseName.content && ucorDict.courseNumber.content && ucorDict.courseSection.content) ?
                        '<span class="courseTitleWrapper"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="courseTitle">' + prefix + ' ' + ucorDict.courseNumber.content + '-' + ucorDict.courseSection.content + ' ' + ucorDict.courseName.content + '</span></span>' :
                        '<span class="courseTitleWrapper"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="courseTitle">' + ucorDict.contentItemName.content + '</span></span>';






    /*** 
     *  courseType asssignment
     * 
     * */
    let detailsType =   (ucorDict.courseType.content) ?
                        '<div class="col-xs-12 courseDetails courseTypes"><h4>Course Type: </h4><span class="courseType">' + ucorDict.courseType.content + '</span></div>' :
                        '<span class="courseDetails courseTypes">No valid type provided</span>';




    /*** 
     *  faculty asssignment
     * 
     * */
    let detailsFaculty =    (ucorDict.faculty.content) ?
                            '<div class="col-xs-12 col-sm-3 courseDetails instructors"><h5>Faculty: </h5><span class="faculty">' + ucorDict.faculty.content + '</span></div>' :
                            '<span class="courseDetails instructors">No valid faculty provided</span>';




    /*** 
     *  term asssignment
     * 
     * */
    let detailsTerm =   (ucorDict.term.content) ?
                        '<div class="col-xs-12 col-sm-3 courseDetails terms"><h5>Term: </h5><span class="term">' + ucorDict.term.content + '</span></div>' :
                        '<span class="courseDetails terms">No valid term provided</span>';




    /*** 
     *  year asssignment
     * 
     * */
    let detailsYear =   (ucorDict.year.content) ?
                        '<div class="col-xs-12 col-sm-3 courseDetails years"><h5>Year: </h5><span class="year">' + ucorDict.year.content + '</span></div>' :
                        '<span class="courseDetails years">No valid year provided</span>';




    /*** 
     *  ucorModule asssignment
     * 
     * */
    let detailsModule = (ucorDict.ucorModule.content) ?
                        '<div class="col-xs-12 col-sm-3 courseDetails ucorModules"><h5>Module: </h5><span class="ucorModule">' + ucorDict.ucorModule.content + '</span></div>' :
                        '<span class="courseDetails ucorModules">No valid module provided</span>';




    /*** 
     *  courseDescription asssignment
     * 
     * */
    let descriptionString = (ucorDict.courseDescription.content) ?
                            '<div class="col-xs-12 courseDetails courseDescriptions"><h5>Course Description: </h5><div class="courseInfo"><p>' + ucorDict.courseDescription.content + '</p></div></div>' :
                            '<span class="courseDetails courseDescriptions hidden visually-hidden">No valid description provided</span>';




    /*** 
     *  comments asssignment
     * 
     * */
    let commentString = (ucorDict.comments.content) ?
                        '<div class="row col-xs-12 levelFour"><div class="col-xs-12 courseDetails comments"><h5>Comments: </h5><div class="courseInfo"><p>' + ucorDict.comments.content + '</p></div></div></div>' :
                        '<span class="courseDetails comments hidden visually-hidden">No valid comments provided</span>';




    /*** 
     *  groupDescription asssignment
     * 
     * */
    let groupDescriptionString =    (ucorDict.groupDescription.content) ?
                                    '<div class="row col-xs-12 levelFive"><div class="col-xs-12 courseDetails groupDescription"><h5>Common UCOR Course Description: </h5><div class="courseInfo"><p>' + ucorDict.groupDescription.content + '</p></div></div></div>' :
                                    '<span class="courseDetails groupDescription hidden visually-hidden">No valid comments provided</span>';




    /*** 
     *  keywords asssignment
     * 
     * */
    let keywordString = (ucorDict.keywords.content) ?
                        '<div class="courseDetails keyWords hidden visually-hidden"><span class="courseInfo hidden visually-hidden">' + ucorDict.keywords.content + '</span></div>' :
                        '<span class="courseDetails keyWords hidden visually-hidden">No valid keywords provided</span>';




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
            descriptionWrapper,
            descriptionString,
            closeDescriptionWrapper,
            commentString,
            groupDescriptionString,
            keywordString,
            closeContainer,
            closeCardBody,
            closeCollapseDiv,
            closeCard,
            endingHTML
        ]
    );




/***
 *  catch errors
 * 
 * */
} catch (err) {
    document.write(err.message);
}