class Solution {
    public int[] asteroidCollision(int[] arr) {

        Stack<Integer> st = new Stack<>(); // new stack for storinf asteroids

        int i = 0; // points towards current incoming asteroid

        // till the time we have asteroids left in the array
        while (i < arr.length) {

            if (st.isEmpty()) { // if stack is empty
                st.push(arr[i]); // we push inside stack
                i++;
            } else {
                // only collision condition
                if (st.peek() > 0 && arr[i] < 0) { // peek element ----> <----incoming asteroid

                    if (Math.abs(st.peek()) == Math.abs(arr[i])) { // if colliding ast. are equal
                        st.pop(); // stored ast. is destroyed
                        i++; // incoming ast. is also destroyed, i.e. why we move to next element

                    } else {
                        // when size is not same
                        if (Math.abs(st.peek()) > Math.abs(arr[i])) { // stored ast. > incoming ast.
                            // incoming as. will be destroyed i.e. moving to next ast.
                            i++;
                        } else {
                            while (!st.isEmpty() && st.peek() > 0 && arr[i] < 0
                                    && Math.abs(st.peek()) < Math.abs(arr[i])) {
                                // stored ast will be destroyed
                                st.pop();
                            }
                        }
                    }

                } else { // no collision cases
                    // so , we just push into stack
                    st.push(arr[i]);
                    i++;
                }
            }

        }

        // resultant aaray to move elements from stack to []
        int[] result = new int[st.size()];
        for (int idx = result.length - 1; idx >= 0; idx--) {
            result[idx] = st.peek();
            st.pop();
        }
        return result;

    }
}