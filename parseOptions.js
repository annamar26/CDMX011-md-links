function optionsParse(o1, o2) {

    if (o1 === '--stats' || '--s' && o2 == null || undefined) {
        return 'stats'
    } else if (o1 === '--validate' || '--v' && o2 == null || undefined) {
        return 'validate'
    } else if (o1 === '--stats' || '--s' && o2 == '--validate' || '--v') {
        return 'both'
    } else if (o1 === '--validate' || '--v' && o2 == '--stats' || '--s') {
        return 'both'
    } else if (o1 === undefined || null && o2 == undefined || null) {
        return 'onlylinks'
    } else if (o1 === "--help" || '--h') {
        return 'help'
    }
    return 'undefined'

}
module.exports = optionsParse