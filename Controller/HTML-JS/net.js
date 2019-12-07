const html = (hostip, hostname, userip) => {

    return `<p>IP</p>
        <p>${hostip}</p>
        <p>HOST</p>
        <p>${hostname}</p>
        <p>User IP</p>
        <p>${userip}</p>`

}
module.exports = html