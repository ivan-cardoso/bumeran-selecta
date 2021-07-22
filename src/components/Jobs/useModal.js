import React, {useState, useEffect} from 'react'
import {makeStyles} from "@material-ui/core";
import JobsForm from './JobsForm';
import { message } from "antd";
import styles from "./index.module.css"

export default function useModal(){

    function getModalStyle() {
        const top = 50
        const left = 50
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        }
    }
    //Modal settings
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'absolute',
            width: 1100,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        }))
    const classes = useStyles()

    const [modalStyle] = React.useState(getModalStyle)
    const [open, setOpen] = React.useState(false)
    const [openUpdate, setOpenUpdate] = React.useState(false)
    
    const handleOpen = () => {
        setOpen(true)
        // setOpenUpdate(true)
    }
    const handleClose = () => {
        setOpen(false)
        // setOpenUpdate(false)
    }

    return ({open, setOpen,handleOpen, handleClose, classes, modalStyle, openUpdate, setOpenUpdate})
}