export default class Commands {
  static checkCommand(input) {
    var sorry = "Sorry, this portfolio is still under construction. I have yet to add this functionality. :("
    var tokens = input.toLowerCase().split(" ")
    var cmd = tokens[0];
    var invis = "‎‏‏‎ ‎‎‏‏‎";
    switch(cmd)
    {
      //‏‏‎[ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‎‎‎‎‎‎]invis characters//
      case "help":
        let v = [
          {command:"HELP", desc: "Lists all known commands and their descriptions"},
          {command:"LS", desc: "Lists all project files"},
          {command:"CLEAR", desc: "Clears the console"},
          {command:"MORE <project>", desc: "Display the description of the project"},
          {command:"ABOUT <subject>", desc: "Use to learn a little more about the subject. <br>"+invis.repeat(20)+"Use ME or SKILLS to learn more about them"},
        ]
        let retval = "";
        for(let [i,c] of v.entries())
        {
          retval += (c.command +invis.repeat(20 - c.command.length)+c.desc + "<br>");
        }
          return retval;
      case "about":
        switch(tokens[1]){
          case undefined:
            return "Hm, make sure to use an argument for this command. Ex: 'about me'"
          case "me":
            return "Hey! I'm Levi Huchingson, a UCF Computer Science student set to graduate Dec 2020!"
          case "skills":
            return "I am fluent in C, Java, and JavaScript. I'm currently focusing on learning Haskell. In the past I have dabbeled in C#, Python, and MatLab."
          default:
            return `Invalid argument ${tokens[1]}. Use HELP to learn more about the valid arguments`
        }
      case "ls":
        return sorry;
      case "more":
        return sorry;
      case "":
        return "";
      case "clear":
        return "levih> clear"
      default:
        return  `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`
    }
  }
}
