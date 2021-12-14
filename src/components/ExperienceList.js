import React, {useEffect, useState} from "react";
import {Text, StyleSheet, View} from "@react-pdf/renderer"
import API from "../utils/API";
import RoleList from "./RoleList"

function ExperienceList (props) {
    const [roleList, setRoleList] = useState([])

    useEffect(()=>{
        API.getRoles(props.exp.id)
        .then(res=>{
            setRoleList(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        // eslint-disable-next-line
    },[])

    const expStyles = StyleSheet.create({
        bold: {
            fontFamily: 'Roboto-Bold'
        },
        titles: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    })

    return (
        <View>
            <View style={expStyles.titles}>
                <Text style={expStyles.bold}>{props.exp.employer}</Text>
                <Text style={expStyles.bold}>{props.exp.start} - {props.exp.end}</Text>
            </View>
            <Text>{props.exp.job_title}</Text>
            {roleList.map(item => <RoleList key={item.id} role={item.role}/>)}
            <Text>  </Text>
        </View>
    )
}

export default ExperienceList