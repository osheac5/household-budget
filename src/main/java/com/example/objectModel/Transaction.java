package com.example.objectModel;

import java.util.Date;

/**
 * Created by Conor on 11/05/2017.
 */
public class Transaction {

    Integer id;
    String note;

    public Transaction() {
        this.id = 0;
        this.note = "";
    }

    public Transaction(Integer id, String note) {
        this.id = id;
        this.note = note;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", note='" + note + '\'' +
                '}';
    }
}
