const mapStateToProps = (state) => {
    // debugger
    return {
        notebook: {
            title: '',
            authorId: state.session.id,
            // works with author_id, find way to switch between camel/snake
            // fix this its hideous
        },
        formType: "create",
        errors: state.errors.session,
    }
}

const mapDispatchToProps = dispatch => ({
    action: notebook => dispatch(createNotebook(notebook)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFormModal)



