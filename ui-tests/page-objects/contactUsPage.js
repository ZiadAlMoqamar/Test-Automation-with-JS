const elements = {
    inputFieldEmail: '#email',
    btnSubmitMessage: '#submitMessage',
    divErrorAlert: '.alert.alert-danger',
};
const commands = [
    {
        enterEmail(email) {
            return this.setValue('@inputFieldEmail', email);
        },
    },
    {
        submitMessage() {
            return this.click('@btnSubmitMessage');
        },
    },
];
module.exports = {
    elements: elements,
    commands: commands,
};
