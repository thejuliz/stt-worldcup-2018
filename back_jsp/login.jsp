<%@page import="javax.servlet.http.HttpSession"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="java.util.Properties"%>

<%@page import="javax.naming.*"%>
<%@page import="javax.naming.directory.*"%>
<%@page import="java.util.Hashtable"%>
<%@page import="java.util.*"%>
<%
    String strUsername = request.getParameter("username");
    String strPassword = request.getParameter("password");
    String rememberMe = request.getParameter("rememberMe");

    if(strUsername==null) strUsername = "";
    if(strPassword==null) strPassword = "";

    if(strUsername.equals("") || strPassword.equals("")){
        response.sendError(401);
        return;
    }
    else {
        try {
                                            // ldap check
            Hashtable env = new Hashtable();
            env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
            env.put(Context.PROVIDER_URL, "ldap://ldapserver:389");
            env.put(Context.SECURITY_AUTHENTICATION, "simple");
            env.put(Context.SECURITY_PRINCIPAL, "INSET\\" + strUsername);
            env.put(Context.SECURITY_CREDENTIALS, "" + new String(strPassword.getBytes("ISO8859-1"), "TIS-620" ));
            DirContext ctx = new InitialDirContext(env);

            session.setAttribute("wcIsLoggedIn","true");
            session.setAttribute("wcUsername",strUsername);
            response.setContentType("application/json");
            response.getWriter().write("{\"username\":\""+strUsername+"\"}");

        } catch(Exception e) {
            e.printStackTrace();
            response.sendError(401);
        }
    }
%>