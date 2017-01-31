import React from "react"
import { connect } from "react-redux"

import ButtonGroup from "../ButtonGroup"
import Steps from "../StepBar"
import HelpMessage from "../HelpMessage"

export default class Layout extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <Steps vertical={false}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <HelpMessage />
                    </div>
                    <div className="col-md-1">
                        <Steps vertical={true} />
                    </div>
                    <div className="col-md-6">
                        <ButtonGroup />
                    </div>
                </div>
            </div>
        )
    }
}
