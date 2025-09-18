@@ .. @@
 export const AlertContainer: React.FC = () => {
   const { alerts, removeAlert } = useAlert();
 
   return (
-    <div className="fixed top-20 right-4 z-50 space-y-2">
+    <div className="fixed top-20 right-4 z-50 space-y-3 max-w-sm">
       {alerts.map((alert) => (
         <Alert
           key={alert.id}
           type={alert.type}
           title={alert.title}
           message={alert.message}
           isVisible={true}
           onClose={() => removeAlert(alert.id)}
+          duration={5000}
         />
       ))}
     </div>