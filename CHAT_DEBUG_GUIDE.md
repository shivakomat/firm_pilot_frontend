# Chat System Debug Guide

## 🚨 **Quick Debugging Steps**

### **1. Check Browser Console**
Open browser dev tools (F12) and look for these logs:

**Expected Client Portal Logs:**
```
🔧 Chat Component initialized with client ID: [NUMBER]
🔄 Client Chat Manager initializing...
🆔 Client ID determined: [NUMBER]
📋 Loading chat for client ID: [NUMBER]
✅ Chat initialization response: [OBJECT]
🔄 Message polling started
```

**Expected Accountant Portal Logs:**
```
📋 Loading all client threads for accountant...
✅ Clients loaded: [OBJECT]
🔄 Message polling started for accountant portal
```

### **2. Check Network Tab**
Look for these API requests:

**Client Portal:**
- `GET /threads/[CLIENT_ID]` - Should return 200 or 404
- `POST /threads/[CLIENT_ID]/messages` - When sending messages

**Accountant Portal:**
- `GET /clients` - To load client list
- `GET /threads/[CLIENT_ID]` - When selecting a client
- Polling requests every 5 seconds

### **3. Common Issues & Solutions**

#### **❌ Issue: "Client ID is 0 or null"**
**Symptoms:** Console shows `🆔 Client ID determined: 0`
**Causes:**
- User not properly authenticated
- JWT token missing or invalid
- User object doesn't have ID field

**Debug Steps:**
1. Check `localStorage.getItem('authToken')`
2. Check `localStorage.getItem('currentUser')`
3. Verify user is logged in properly

**Fix:**
```javascript
// In browser console, check:
localStorage.getItem('authToken')
localStorage.getItem('currentUser')
```

#### **❌ Issue: "Network errors (CORS, 404, 500)"**
**Symptoms:** Red network errors in console
**Causes:**
- Backend API not running
- Wrong API URL in environment
- CORS issues
- Authentication problems

**Debug Steps:**
1. Check if backend is accessible: `https://firm-pilot-8192aca6d8ad.herokuapp.com/health`
2. Verify API endpoints exist
3. Check authentication headers

#### **❌ Issue: "Chat component not loading"**
**Symptoms:** Blank page or component errors
**Causes:**
- Module import issues
- Component not declared
- Template errors

**Debug Steps:**
1. Check if ChatComponent is in ClientPortalModule
2. Verify all imports are correct
3. Check for template binding errors

#### **❌ Issue: "Messages not sending"**
**Symptoms:** Message input works but nothing happens on send
**Causes:**
- API endpoint errors
- Invalid request format
- Authentication issues

**Debug Steps:**
1. Check network tab for failed POST requests
2. Verify request body format
3. Check authentication token

#### **❌ Issue: "Messages not appearing in real-time"**
**Symptoms:** Messages only show after refresh
**Causes:**
- Polling not working
- WebSocket issues (if implemented)
- Component state not updating

**Debug Steps:**
1. Check for polling requests in network tab
2. Verify `startMessagePolling()` is called
3. Check for JavaScript errors

### **4. Manual Testing Commands**

**Test API Directly:**
```javascript
// In browser console:
fetch('https://firm-pilot-8192aca6d8ad.herokuapp.com/threads/1', {
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('authToken'),
    'Content-Type': 'application/json'
  }
})
.then(r => r.json())
.then(console.log)
```

**Test Authentication:**
```javascript
// Check current user
console.log('Current User:', localStorage.getItem('currentUser'));
console.log('Auth Token:', localStorage.getItem('authToken'));
```

**Test Chat Service:**
```javascript
// In component context (if available)
console.log('Chat Service:', this.chatService);
console.log('Current User:', this.currentUser);
console.log('Client ID:', this.clientId);
```

### **5. Environment Check**

**Development vs Production:**
- Development: `http://localhost:9000`
- Production: `https://firm-pilot-8192aca6d8ad.herokuapp.com`

**Verify correct environment is being used:**
```javascript
// In browser console
console.log('Environment:', window.location.origin);
```

### **6. Step-by-Step Debugging**

1. **Open browser dev tools (F12)**
2. **Go to Console tab**
3. **Navigate to chat page**
4. **Look for initialization logs**
5. **Try sending a message**
6. **Check Network tab for API calls**
7. **Note any red errors**

### **7. Common Error Messages**

| Error | Meaning | Solution |
|-------|---------|----------|
| `Cannot read property 'id' of null` | User object is null | Check authentication |
| `404 Not Found` | API endpoint doesn't exist | Verify backend is running |
| `401 Unauthorized` | Authentication failed | Check JWT token |
| `CORS error` | Cross-origin request blocked | Backend CORS configuration |
| `Cannot bind to 'ngModel'` | FormsModule not imported | Add FormsModule to module |

### **8. Quick Fixes**

**Reset Authentication:**
```javascript
localStorage.removeItem('authToken');
localStorage.removeItem('currentUser');
// Then log in again
```

**Force Refresh Component:**
```javascript
window.location.reload();
```

**Check Service Registration:**
Verify ChatService is provided in app.module.ts or component

### **9. Contact Information**
If issues persist, provide:
1. Browser console logs (copy/paste)
2. Network tab errors (screenshots)
3. Steps to reproduce
4. Environment (local/Heroku)
5. User role (client/accountant)

---

## 🔧 **Immediate Actions**

1. **Check console for errors**
2. **Verify user authentication**
3. **Test API endpoints manually**
4. **Check network requests**
5. **Verify environment configuration**
