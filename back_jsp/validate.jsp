<%
    if("true".equals(session.getAttribute("wcIsLoggedIn"))){
        String username = (String) session.getAttribute("wcUsername");
        response.setContentType("application/json");
        response.getWriter().write("{\"username\":\""+username+"\"}");
        return;
    }
    response.sendError(401);
%>