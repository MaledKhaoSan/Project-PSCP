class EmailService {
    constructor() {
        this.templateId = 'template_mtzysnb';
        this.serviceId = 'service_8094t6z';
        emailjs.init("ScyI40bi8WuzRtKpR");
    }

    async sendEmail(username_arrias, email_receiver, user_message) {
        const templateParams = {
            from_name: username_arrias,
            to_email: email_receiver,
            message: user_message,
            subject: `🌸 Banndokmai: New message from ${username_arrias}`
        };

        try {
            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                templateParams
            );
            console.log('Email sent successfully:', response);
            return true;
        } catch (error) {
            console.error('Failed to send email:', error);
            return false;
        }
    }
}

// Export service
window.EmailService = EmailService;

// ฟังก์ชันสำหรับส่งอีเมล
async function sendFlowerEmail() {
    // ดึงค่าจาก input fields ตาม ID ที่มีอยู่
    const username = document.getElementById('username_arrias').value;
    const email = document.getElementById('email_receiver').value;
    const message = document.getElementById('user_message').value;
    
    // Validation
    if (!username || !email || !message ) {
        alert('Please fill in all required fields and select a flower');
        return;
    }

    try {
        // แสดง loading state
        const submitButton = document.querySelector('.button.button1');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending... 🌸';

        // สร้าง instance และส่งอีเมล
        const emailService = new EmailService();
        const success = await emailService.sendEmail(username, email, message);

        if (success) {
            alert('Message sent successfully! 🌸');
            // เคลียร์ฟอร์ม
            document.getElementById('email-form').reset();
        } else {
            alert('Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    } finally {
        // คืนค่าปุ่มกลับสู่สภาพเดิม
        const submitButton = document.querySelector('.button.button1');
        submitButton.disabled = false;
        submitButton.innerHTML = 'Submit';
    }
}