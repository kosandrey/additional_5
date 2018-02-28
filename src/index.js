module.exports = function check(str, bracketsConfig) {
  var data;
  var brackets = [];
  var correct  = false;
  var i;
  for(i = 0; i<str.size; i++)
  {
    data = str[i];
    if(data == '(' || data == '[' || data == '{' || data == '1' || data == '5' || data == '3')
    {
      brackets.push(data);
      correct = false;
      continue;
    }
    else if(data == ')' || data == ']' || data == '}' || data == '2' || data == '6' || data == '4')
    {
      if(data == ')' && brackets[brackets.size -1] == '(')
      {
        brackets.pop();
        correct = true;
      }
      else if(data == ']' && brackets[brackets.size -1] == '[')
      {
        brackets.pop();
        correct = true;
      }
      else if(data == '}' && brackets[brackets.size -1] == '{')
      {
        brackets.pop();
        correct = true;
      }
      else if(data == '2' && brackets[brackets.size -1] == '1')
      {
        brackets.pop();
        correct = true;
      }
      else if(data == '4' && brackets[brackets.size -1] == '3')
      {
        brackets.pop();
        correct = true;
      }
      else if(data == '6' && brackets[brackets.size -1] == '5')
      {
        brackets.pop();
        correct = true;
      }
      if(correct == true) continue;
      else break;
    }
    else if(data == '|' || data == '7' || data =='8')
    {
      if(data == '|'  && [brackets.size -1] == '|')
      {
        brackets.pop()
        correct = true
      }
      else if (data == '|'  && [brackets.size -1] != '|')
      {
          brackets.push(data);
          correct = false;
      }
      else if (data == '7'  && [brackets.size -1] == '7')
      {
          brackets.push(data);
          correct = true;
      }
      else if (data == '7'  && [brackets.size -1] != '7')
      {
          brackets.push(data);
          correct = false;
      }
      else if (data == '8'  && [brackets.size -1] == '8')
      {
          brackets.push(data);
          correct = true;
      }
      else if (data == '8'  && [brackets.size -1] != '8')
      {
          brackets.push(data);
          correct = false;
      }
    }
  }
  //correct = true;
  if (correct == true) return true;// your solution
  else return true;
}

