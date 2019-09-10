const taskBoardStyles = (theme) => ({
    taskboard:{
        display:"flex",
        alignItems:"center"
    },
    shape:{
        backgroundColor:theme.standardColor.primary,
        color: theme.shape.textColor,
        borderColor:"#cccccc",
        padding:20,
        margin:10,
        borderRadius:4
    }
})

export default taskBoardStyles