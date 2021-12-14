import React, {useState, useEffect} from "react";
import {Text, StyleSheet, View} from "@react-pdf/renderer"
import API from "../utils/API";
import DegreeList from "./DegreeList"

function EducationList (props) {
    const [degreeList, setDegreeList] = useState([])

    useEffect(()=>{
        API.getDegree(props.edu.id)
        .then(res=>{
            console.log(res.data)
            setDegreeList(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        // eslint-disable-next-line
    },[])

    const eduStyles = StyleSheet.create({
        bold: {
            fontFamily: 'Roboto-Bold',
            fontWeight: 'bold'
        },
        titles: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    })

    return (
        <View>
            <View style={eduStyles.titles}>
                <Text style={eduStyles.bold}>{props.edu.name}</Text>
                <Text style={eduStyles.bold}>{props.edu.start} - {props.edu.end}</Text>
            </View>
            {degreeList.map(item => <DegreeList key={item.id} degree={item.degree}/>)}
            <Text>  </Text>
        </View>
    )
}

export default EducationList