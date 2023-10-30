import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function createUser() {
    const newUser = await prisma.user.create({
        data: {
            name: 'Alice',
        },
    })
        const users = await prisma.user.findMany()
        console.log(users)
    
        

}
 
createUser().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})