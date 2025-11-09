import { db } from "./admin";



async function testFirestore() {
  try {
    await db.collection("debug").doc("ping").set({ ok: true, at: new Date().toISOString() });
    console.log("✅ Firestore write succeeded");
  } catch (err) {
    console.error("❌ Firestore write failed:", err);
  }
}

testFirestore();