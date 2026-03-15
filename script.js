import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class YoussefEmpire extends JFrame {
    private JPanel container;
    private JLabel title;

    public YoussefEmpire() {
        // إعدادات النافذة
        setTitle("إمبراطورية يوسف");
        setSize(800, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(null);

        // 1️⃣ حاوية مركزية
        container = new JPanel();
        container.setBackground(new Color(85, 107, 47));
        container.setBounds(100, 100, 600, 400);
        container.setLayout(null);
        add(container);

        // 2️⃣ العنوان مع تأثير الكتابة
        title = new JLabel("");
        title.setFont(new Font("Arial", Font.BOLD, 30));
        title.setForeground(Color.WHITE);
        title.setBounds(50, 50, 500, 50);
        container.add(title);

        String text = "مرحباً بك في إمبراطورية يوسف";
        new Thread(() -> {
            try {
                for (int i = 0; i < text.length(); i++) {
                    String current = text.substring(0, i + 1);
                    SwingUtilities.invokeLater(() -> title.setText(current));
                    Thread.sleep(80); // سرعة الكتابة
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();

        // 3️⃣ متابعة حركة الماوس لتغيير لون الحاوية
        container.addMouseMotionListener(new MouseMotionAdapter() {
            public void mouseMoved(MouseEvent e) {
                int r = 85 + (int)((double)e.getX()/container.getWidth()*170);
                int g = 107 + (int)((double)e.getY()/container.getHeight()*148);
                int b = 47 + (int)((1-(double)e.getX()/container.getWidth())*100);
                container.setBackground(new Color(r, g, b));
            }
        });

        // 4️⃣ أزرار (روابط) مع نبضة عند الضغط
        JButton link1 = new JButton("الرابط 1");
        JButton link2 = new JButton("الرابط 2");
        JButton link3 = new JButton("الرابط 3");

        JButton[] links = {link1, link2, link3};
        int x = 50;
        for (JButton btn : links) {
            btn.setBounds(x, 150, 120, 40);
            container.add(btn);
            x += 150;

            btn.addActionListener(ae -> {
                // نبضة عند الضغط
                new Thread(() -> {
                    try {
                        btn.setSize(108, 36);
                        Thread.sleep(100);
                        btn.setSize(120, 40);
                    } catch (InterruptedException e) { e.printStackTrace(); }
                }).start();
                System.out.println("استعداد للدخول إلى: " + btn.getText());
            });
        }

        setVisible(true);

        // 5️⃣ رسالة ترحيب
        new Timer(2000, e -> JOptionPane.showMessageDialog(this, "مرحباً بك في إمبراطورية يوسف")).start();
    }

    public static void main(String[] args) {
        new YoussefEmpire();
    }
}
