const html = (hostip, hostname, userip) => {

    return `<p>IP of <strong>${hostname}</strong> : <strong>${hostip}</strong> and the sender ip is <strong>${userip}</strong></p>`
        

}
module.exports = html