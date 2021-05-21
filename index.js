client.on('message', (msg) => {if(msg.content.startsWith(`${config.prefix}rainbow`))
{
 /var colors = ['#E74C3C','#9B59B6','#2980B9','#1ABC9C', '#27AE60', '#F1C40F', '#F5B041'];
  if(!msg.guild) return
    for(let i = 0; i<= colors.length;i++){
    var role = msg.guild.roles.cache.find(role => role.name === "Admin" || role.name === 'AM NAELIKE' );
    
    function randomcolor(colors, i)
    {
      role.edit({
        color: colors[i]
    });
    }
    //----------------------- setinterval function
    setTimeout(function() {
      setInterval(() => {
        randomcolor(colors, i)
      }, 5000);
  }, 1000);
  };
}})
