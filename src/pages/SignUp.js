import React from 'react';
import SignUpForm from '../blocks/SignUpForm';
import Text from '../components/Text';

export default function SignUp() {
    return (
        <div className="content-page content-page--signup h-100">
            <div className="content-page_inner h-100">
                <div className="container container--flex container--center h-100">
                    <div className="container_inner container_inner--medium flex align_center justify_center h-100">
                        <div className="panel panel--signup">
                            <Text type="h2" className="text-primary">Sign Up</Text>
                            <SignUpForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
