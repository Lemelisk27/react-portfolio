import React from "react";
import {Text, StyleSheet} from "@react-pdf/renderer"

function SkillList (props) {
    const skillStyles = StyleSheet.create({
        skill: {
            fontFamily: 'Roboto-Bold',
            fontWeight: 'bold'
        },
        skillList: {
            fontFamily: 'Roboto'
        }
    })

    return (
        <Text style={skillStyles.skill}>{props.title}: <Text style={skillStyles.skillList}>{props.skills}</Text></Text>
    )
}

export default SkillList