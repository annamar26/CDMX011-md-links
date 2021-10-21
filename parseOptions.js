function optionsParse(o1, o2) {

    if (o1 === '--stats' && o2 == null || undefined) {
        return 'stats'
    } else if (o1 === '--validate' && o2 == null || undefined) {
        return 'validate'
    } else if (o1 === '--stats' && o2 == '--validate') {
        return 'both'
    } else if (o1 === '--validate' && o2 == '--stats') {
        return 'both'
    }


}
module.exports = optionsParse