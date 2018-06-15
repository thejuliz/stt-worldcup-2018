<%
    if("true".equals(session.getAttribute("wcIsLoggedIn"))){
        String username = (String) session.getAttribute("wcUsername");
        session.removeAttribute("wcUsername");
        session.removeAttribute("wcIsLoggedIn");
        return;
    }
%>