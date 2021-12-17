import { TiTick } from 'react-icons/ti';
import { AiOutlineMenu, AiOutlineRight, AiFillWarning } from 'react-icons/ai';
import { Fragment } from 'react';

const questionFourList1 = <p>On your phone, open the Google Play Store app <img src={require('../assets/playstore.png')} alt="Play Store" height={14} /> .</p>
const questionFourList2 = <p>Tap Menu <AiOutlineMenu />  <AiOutlineRight /> <span>My apps & games.</span></p>
const questtionFourList3 = <Fragment>
<p>Apps with available updates are labeled "Update."</p>
              <p>If an update is available, tap <span>Update.</span></p>
              <p>If more updates are available, tap <span>Update all.</span></p>
</Fragment>


export const questionList = [
    {
        questionId:'One',
        questionTitle:`Fix an installed Android app that isn't working`,
        questionSubTitle:'Android Troubleshooting',
        questionHeading:'Try the following steps if an app installed on your phone has any of these problems:',
        questionHeadingSpanText:null,
        mainQuestion:'Is your Android phone responding to actions?',
        listType:'ul',
        imagePath:'androidLogo.png',
        lists:[
            {
                id:0,
                value:'Crashing'
            },
            {
                id:1,
                value:`Won't Open`
            },
            {
                id:2,
                value:`Won't Respond`
            },
            {
                id:3,
                value:`Isn't working properly`
            }

        ],
        noteMainText:'Note: Some of these steps work only on Android 8.1 and up.',
        noteSpantext:'Learn how to check your Android version.',
        buttons:[
            {
                id:0,
                btnName:'Yes',
                btnValue:'Three'
            },
            {
                id:1,
                btnName:'No',
                btnValue:'Two'
            }
        ]
    },
    {
        questionId:'Two',
        questionTitle:`Fix an installed Android app that isn't working`,
        questionSubTitle:null,
        questionHeading:'Important: Settings can vary by phone. For more info,',
        questionHeadingSpanText:' contact your device manufacturer.',
        mainQuestion:'Press "Continue" once you have restarted your phone',
        listType:'ol',
        imagePath:'question2.jpg',
        lists:[
            {
                id:0,
                value:`On most phones, press your phone's Power button for about 30 seconds or until your phone restarts.`
            },{
                id:1,
                value:'You might need to tap Restart'
            }
        ],
        noteMainText:null,
        noteSpantext:null,
        buttons:[
            {
                id:0,
                btnName:'Continue',
                btnValue:'Three'
            }
        ]
    },
    {
        questionId:'Three',
        questionTitle:'Check for Android updates',
        questionSubTitle:null,
        questionHeading:null,
        questionHeadingSpanText:null,
        mainQuestion:`Press "Continue" when your phone is updated`,
        listType:'ul',
        imagePath:'question3.jpg',
        lists:[
            {
                id:0,
                value:`Open your phone's Settings app.`
            },
            {
                id:1,
                value:`Near the bottom, tap System and then Advanced and then System update.`
            },
            {
                id:2,
                value:`Depending on your phone, you might need to tap About phone or About tablet and then Software update.`
            },
            {
                id:3,
                value:`You'll find your update status. Follow any steps on the screen.`
            }
        ],
        noteMainText:null,
        noteSpantext:null,
        buttons:[
            {
                id:0,
                btnName:'Continue',
                btnValue:'Four'
            }
        ]
    },
    {
        questionId:'Four',
        questionTitle:'Update the app',
        questionSubTitle:null,
        questionHeading:null,
        questionHeadingSpanText:'contact your device manufacturer.',
        mainQuestion:'Were you able to update the app?',
        listType:'ol',
        imagePath:'question2.jpg',
        lists:[
            {
                id:0,
                value:questionFourList1
            },
            {
                id:1,
                value:questionFourList2
            },
            {
                id:2,
                value:questtionFourList3
            }
        ],
        noteMainText:null,
        noteSpantext:null,
        buttons:[
            {
                id:0,
                btnName:'Yes',
                btnValue:'Success'
            },
            {
                id:1,
                btnName:'No',
                btnValue:'storeUserDetails'
            }
        ]
    },
    {
        questionId:'Success',
        message:'Glad we were able to walk you through updating your app',
        icon:<TiTick />
    },
    {
        questionId:'storeUserDetails',
        message:null
    },
    {
        questionId:'Failure',
        message:'Sorry for the inconvenience! At this stage, you should visit an Google store to get your issue resolved. Your case number is You can find the location closest to you on the Google Store Locator.',
        icon:<AiFillWarning />
    }
];