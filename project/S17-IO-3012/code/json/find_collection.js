db.getSiblingDB("admin").auth("user1", "user1_password" )
use mlb
db.pitches.find( { Speed: { $gt: 100 } } ).count()
