import React, {useState, useEffect} from "react";
import "./style.css"
import {PDFViewer, Page, Text, View, Document, StyleSheet, Link, Font} from "@react-pdf/renderer"
import API from "../../utils/API"
import SkillList from "../../components/SkillList"
import ExperienceList from "../../components/ExperienceList"
import EducationList from "../../components/EducationList"

function Resume () {
    const [user, setUser] = useState({})
    const [skillList, setSkillList] = useState([])
    const [experenceList, setExperenceList] = useState([])
    const [eduList, setEduList] = useState([])

    useEffect(()=>{
        API.getUsers()
        .then(res=>{
            setUser(res.data[0])
            const userid = res.data[0].id
            API.getUserResume(userid)
            .then(res=>{
                const ResumeId = res.data.id
                API.getSkills(ResumeId)
                .then(res=>{
                    setSkillList(res.data)
                    API.getExperience(ResumeId)
                    .then(res=>{
                        setExperenceList(res.data)
                        API.getEducation(ResumeId)
                        .then(res=>{
                            setEduList(res.data)
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err=>{
            console.log(err)
        })
        // eslint-disable-next-line
    },[])

    Font.register({
        family: 'Roboto',
        src: "http://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf",
    })

    Font.register({
        family: 'Roboto-Bold',
        src: 'http://fonts.gstatic.com/s/roboto/v15/bdHGHleUa-ndQCOrdpfxfw.ttf'
    })

    const styles = StyleSheet.create({
        page: {
            fontSize: 11,
            display: "flex",
            flexDirection: 'column',
            backgroundColor: 'white',
            paddingHorizontal: 30,
            paddingVertical: 20,
            fontFamily: 'Roboto',
        },
        header: {
            display: "flex",
            width: "100%",
            alignSelf: "flex-start",
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            marginBottom: 10
        },
        name: {
            fontSize: 20,
        },
        headertext: {
            display: "flex",
            alignItems: "center"
        },
        contacttext: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        bodytitles: {
            fontFamily: 'Roboto-Bold',
            marginTop: 10,
            textDecoration: "underline",
            // fontWeight: "bold"
        },
        bodytext: {
            marginLeft: 20,
            marginTop: 10
        }
    })

    return (
        <div className="zs-resume d-flex flex-column col-12 overflow-auto">
            <div className="zs-resumebody d-flex flex-column col-lg-9 col-12 mx-auto mt-3">
                <PDFViewer width="100%" height="680px">
                <Document
                    title="Zach Smith's Resume"
                    author="Zach Smith"
                    subject="Zach Smith's Resume">
                    <Page size="A4" style={styles.page}>
                        <View style={styles.header}>
                            <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                            <View style={styles.headertext}>
                                <Text>{user.city}, {user.state}</Text>
                                <View style={styles.contacttext}>
                                    <Text>Phone: {user.phone}</Text>
                                    <Text>       </Text>
                                    <Text>Email: {user.email}</Text>
                                </View>
                                <Text>LinkedIn: <Link src={user.linkedin}>{user.linkedin}</Link></Text>
                                <Text>GitHub: <Link src={user.github}>{user.github}</Link></Text>
                                <Text>Portfolio: <Link src={user.portfolio}>{user.portfolio}</Link></Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.bodytitles}>About Me</Text>
                            <Text style={styles.bodytext}>{user.about}</Text>
                            <Text style={styles.bodytitles}>Skills</Text>
                            <View style={styles.bodytext}>
                                {skillList.map(item => <SkillList key={item.id} title={item.title} skills={item.skills}/>)}
                            </View>
                            <Text style={styles.bodytitles}>Experence</Text>
                            <View style={styles.bodytext}>
                                {experenceList.map(item => <ExperienceList key={item.id} exp={item}/>)}
                            </View>
                            <Text style={styles.bodytitles}>Education</Text>
                            <View style={styles.bodytext}>
                                {eduList.map(item => <EducationList key={item.id} edu={item}/>)}
                            </View>
                        </View>
                    </Page>
                </Document>
                </PDFViewer>
            </div>
        </div>
    )
}

export default Resume