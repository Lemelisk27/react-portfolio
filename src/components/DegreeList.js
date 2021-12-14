import React from "react";
import {Text, StyleSheet} from "@react-pdf/renderer"

function DegreeList (props) {
    const degreeStyles = StyleSheet.create({
        degree: {
            marginLeft: 20
        }
    })

    return (
        <Text style={degreeStyles.degree}>{'\u2022'} {props.degree}</Text>
    )
}

export default DegreeList