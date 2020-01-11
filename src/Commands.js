export default class Commands {
  static checkCommand(input) {
    var tokens = input.split(" ")
    var cmd = tokens[0];
    var invis = "‎‏‏‎ ‎‎‏‏‎";
    switch(cmd)
    {
      //‏‏‎[ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎‎‎‎‎‎‎]invis characters//
      case "help":
        let v = [
          {command:"HELP", desc: "Prints all known commands and their descriptions"},
          {command:"LS", desc: "Lists all project files"},
          {command:"CLEAR", desc: "Clears the console"},
          {command:"MORE <project>", desc: "Print the description of the project"},
        ]
        let retval = "";
        for(let [i,c] of v.entries())
        {
          retval += (c.command +invis.repeat(20 - c.command.length)+c.desc + "<br>");
        }
          return retval;
      case "":
        return "";
      default:
        return  `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`
    }
  }
}
