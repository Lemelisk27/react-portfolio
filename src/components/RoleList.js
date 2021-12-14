import React from "react";
import {Text, StyleSheet} from "@react-pdf/renderer"

function RoleList (props) {
    const roleStyles = StyleSheet.create({
        roles: {
            marginLeft: 20
        }
    })

    return (
        <Text style={roleStyles.roles}>{'\u2022'} {props.role}</Text>
    )
}

export default RoleList