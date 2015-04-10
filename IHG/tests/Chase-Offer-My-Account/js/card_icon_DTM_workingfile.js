jQuery(document).ready(function(jQuery) {

	var pcINTERACT    = jQuery('.rewardsClubHome #pcrInteract'); // Interact marketing module
	var chaseOffer    = jQuery('<div class=\"chaseOffer\"></div>');
	var iconCC 		  = jQuery('<img src=\"https://prodcache.internal.ihg.com/content/dam/etc/media_library/branded/6c/cn/rewardsclub/buttons/icon_credit_card.png\">');
	var chaseMsg	  = jQuery('<p class=\"chaseMsg\">Earn 70,000 bonus points. Plus get a Free Night every year.</p>');
	var learnMore	  = jQuery('<a href=\"https://creditcards.chase.com/a1/ihg/ihg70/?CELL=6FDG&cm_sp=OSMAM-6C-US-EN-MYM-X-MHR-ChaseMasterCard-70offer-S\"> Learn More.&nbsp;</a>');
	var currentPtsDiv = jQuery('<span class=\"currentPts\">Current Points:&nbsp;</span>');
	
	var ptsBalance 	  = jQuery('.welcomePointsValue').text(); // Get current RC points balance
	var strParse 	  = parseInt(ptsBalance.replace(',',''), 10); // convert RC points string to number
	alert(strParse)
	
	var bonusPoints	  = 70000;
	var bonusPtsTxt   = jQuery('<span class="bonusPtsTxt"> + Bonus Points: </span><span>' + bonusPoints + '</span>');
	var totalPts      = jQuery(strParse + bonusPoints);						// sum total of Bonus points (70,000) and current RC points

	var pointsInt	  = jQuery('<span class=\"pointsInt\"></span>');		// Current RC points span
	var bonusInt	  = jQuery('<span class=\"bonusInt\"></span>');			// Chase bonus points span
	var totalInt	  = jQuery('<span class=\"totalInt\">&nbsp;= </span>');	// Total points span
	// var POINTS 		  = jQuery('Points');

	// INITAL CONTAINER AND CONTENT SETUP
	jQuery(pcINTERACT).remove(); 							//remove Interact container
	jQuery(chaseOffer).insertAfter('.rewardsClubHome h3');	//move heading
	jQuery(iconCC).appendTo(chaseOffer); 					// add credit card icon to chase offer container
	jQuery(chaseMsg).appendTo(chaseOffer); 					// add messaging to offer container
	jQuery(learnMore).appendTo(chaseMsg); 					// append 'learn more' link

	// APPEND SPANS TO MESSAGE CONTAINER
	jQuery(currentPtsDiv).appendTo(chaseMsg);				// palce "currentPtsTxt" text after Chase message
	jQuery(pointsInt).appendTo(chaseMsg);					// place "pointsInt" span inside Chase message
	jQuery(bonusInt).appendTo(chaseMsg);					// place "bonusInt" span inside Chase message
	jQuery(totalInt).appendTo(chaseMsg);					// place "totalInt" span inside Chase message

	// APPEND POINT VALUES TO RESPECTIVE PARENTS
	jQuery(strParse).appendTo(pointsInt);					// place RC points balance inside "pointsInt" span
	jQuery(bonusPtsTxt).appendTo(bonusInt);					// place Bonus points inside "pointsInt" span

	jQuery(totalPts).appendTo(totalInt);					// place "totalPts" inside "totalInt" span
	// jQuery(POINTS).insertAfter(totalPts);

    // regex: add comma to separate value as needed
    jQuery.fn.digits = function () {
        return this.each(function () {
            jQuery(this).text(jQuery(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        });
    };

    jQuery('.bonusPts, .currentPts, .totalPts').digits();	// call 'digits' function

});