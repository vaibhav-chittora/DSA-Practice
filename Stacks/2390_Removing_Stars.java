class Solution {
    public String removeStars(String s) {
        Stack <Character> st = new Stack<>();

        int i = 0;
        while(i < s.length()){
            if(s.charAt(i) != '*'){
                st.push(s.charAt(i));
            }else if( s.charAt(i) == '*' && !st.empty()){
                st.pop();
            }
            i++;
        }

        String result = "";
        while(!st.empty()){
           result = st.peek()+result;
           st.pop();
        }

        return result;
        
    }
}