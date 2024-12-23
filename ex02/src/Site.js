function Site( props ){
    // props = {a_tag:[]}
    const {a_tag} = props
    // const {[],[],[]}
    var li = []
    for(let i=0; i<a_tag.length;i++){
        li = li.concat( 
            <li><a href={a_tag[i].href}>{a_tag[i].txt}</a></li> 
        )
    }
    console.log( li )
    return( <nav> <ul> {li} </ul> </nav> ) 
};
export default Site;