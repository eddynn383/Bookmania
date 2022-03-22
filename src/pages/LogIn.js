import React from 'react'
import LogInForm from '../blocks/LogInForm'
import Text from '../components/Text'

export default function LogIn() {
    return (
        <div className="content-page content-page--login">
            <div className="content-page_inner">
                <div className="container container--flex container--center">
                    <div className="container_inner container_inner--medium">
                        <Text type="h2" className="text-primary">Log In</Text>
                        <LogInForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
