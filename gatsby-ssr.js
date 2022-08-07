import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script key={1}>var _ctct_m=`60d60c388f5da699c8382b3e4487fa4c`;</script>,
        <script key={2} id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>
    ])
}